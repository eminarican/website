use wasm_bindgen::prelude::*;

use basher_evaluator::eval;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[macro_export]
macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn eval_bash(input: &str, callback: &js_sys::Function) -> JsValue {
    let result = {
        let callback = callback.clone();
        eval(input, move |name, args| {
            callback.call2(
                &JsValue::null(),
                &JsValue::from_str(&name),
                &JsValue::from_serde(&args).unwrap()
            ).unwrap().clone().into_serde().unwrap()
        }).expect("couldn't parse input")
    };
    JsValue::from_serde(&result).unwrap()
}
