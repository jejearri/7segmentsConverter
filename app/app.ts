import {convert} from "./converter";

const args = process.argv;

try {
    console.log(convert(args[2]));
}catch (error) {
    console.log(error.name+' : '+error.message);
}
