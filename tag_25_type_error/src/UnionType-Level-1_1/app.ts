//* UnionType-Level-1_1

type TResult = "success" | "error" | "pending";
let result: TResult = "success";
result = "error";
result = "pending";

function handleResult(res: TResult){
    console.log(`Type is ${res}`);
}

handleResult(result);