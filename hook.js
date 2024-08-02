Java.perform(function() {
    var library_name = "myapplication01.so"; // change these..!

    // Change these to your JNI function
    var function_names = [
        "Java_com_example_myapplication01_reporter_flgFromJNI",
        "Java_com_example_myapplication01_reporter_stringFromJNI",
        "Java_com_example_myapplication01_reporter_xxx",
        "Java_com_example_myapplication01_reporter_intx",
    ];
    var RED = "\x1b[31m";
    var GREEN = "\x1b[32m";
    var BLUE = "\x1b[34m";
    var RESET = "\x1b[0m";
    var YELLOW = "\x1b[33m";
    console.log("\n-------------------------------------------")
    console.log(RED+`
⠀⠀⠀⢀⡤⢤⢄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⡅⠠⢀⡈⢀⣙⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠤⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⠀⠀⠀⠈⠙⠿⣝⢇⠀⠀⣀⣠⠤⠤⠤⠤⣤⡤⠚⠁⠀⠀⠀⠀⠀⠉⠢⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢧⡀⠀⠀⠠⣄⠈⢺⣺⡍⠀⠀⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⡆⢀⠘⣔⠄⠑⠂⠈⠀⡔⠤⠴⠚⡁⠀⠀⢀⠀⠀⠀⣠⠔⢶⡢⡀⠀⠠⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣇⠀⢃⡀⠁⠀⠀⠀⡸⠃⢀⡴⠊⢀⠀⠀⠈⢂⡤⠚⠁⠀⠀⠙⢿⠀⠉⡇⠀⠀⠀⠀⠀
⠀⠀⠀⣠⠾⣹⢤⢼⡆⠀⠀⠀⠀⠀⠀⠈⢀⠞⠁⠀⢠⣴⠏⠀⠀⠀⠀⠀⠀⠸⡇⠀⢇⠀⠀⠀⠀⠀
⠀⠀⣾⢡⣤⡈⠣⡀⠙⠒⠀⠀⠀⠀⣀⠤⠤⣤⠤⣌⠁⢛⡄⠀⠀⠀⠀⠀⠠⡀⢇⠀⠘⣆⠀⢀⡴⡆
⠀⠀⣿⢻⣿⣿⣄⡸⠀⡆⠀⠒⣈⣩⣉⣉⡈⠉⠉⠢⣉⠉⠀⠀⠀⠀⠀⠀⠀⢣⠈⠢⣀⠈⠉⢁⡴⠃
⠀⢀⢿⣿⣿⡿⠛⠁⠀⢻⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣸⢿⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⡇⠉⠉⠁⠀⠀
⣠⣞⠘⢛⡛⢻⣷⣤⡀⠈⡎⣿⣿⣿⣿⣿⣿⣿⣿⣿⠹⠏⠀⠀⠀⠀⠀⠀⠀⠀⠇⢰⡇⠀⠀⠀⠀⠀
⠻⣌⠯⡁⢠⣸⣿⣿⣷⡄⠁⠈⢻⢿⣿⣿⣿⣿⠿⠋⠃⠰⣀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠇⠀⠀⠀⠀⠀
⠀⠀⠉⢻⠨⠟⠹⢿⣿⢣⠀⠀⢨⡧⣌⠉⠁⣀⠴⠊⠑⠀⡸⠛⠀⠀⠀⠀⠀⣸⢲⡟⠀⠀⠀⠀⠀⠀
⠀⠀⣠⠏⠀⠀⠀⠉⠉⠁⠀⠐⠁⠀⠀⢉⣉⠁⠀⠀⢀⠔⢷⣄⠀⠀⠀⠀⢠⣻⡞⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠟⡦⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⢾⠉⠀⣹⣦⠤⣿⣿⡟⠁⠀⠀⠀⢀⣶⠟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠙⣦⣁⡎⢈⠏⢱⠚⢲⠔⢲⠲⡖⠖⣦⣿⡟⠀⣿⡿⠁⣠⢔⡤⠷⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢿⣟⠿⡿⠿⠶⢾⠶⠾⠶⠾⠞⢻⠋⠏⣸⠁⠀⡽⠓⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⡏⠳⠷⠴⠣⠜⠢⠜⠓⠛⠊⠀⢀⡴⠣⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣏⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠊⠁⢀⣀⣀⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⢦⡀⠀⠀⠀⠀⠀⠀⢀⣀⠴⠖⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠑⠒⠒⠐⠒⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`+RESET+BLUE+"3v1l JN1 H00k....!!"+RESET);
    var library_loaded = false;
    var library_path = "";

    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function(args) {
            library_path = Memory.readCString(args[0]);
            if (library_path.includes(library_name)) {
                console.log("\n-------------------------------------------")
                console.log(BLUE+"[~] Loading library : " + library_path+RESET);
                library_loaded = true;
            }
        },
        onLeave: function(args) {
            if (library_loaded) {
                console.log("\n-------------------------------------------")
                console.log(GREEN+"[+] Loaded library: " + library_path+RESET);
                var nativeLib = Module.load(library_path);

                function_names.forEach(function(function_name) {
                    var methodAddress = nativeLib.findExportByName(function_name);
                    if (methodAddress) {
                        console.log(GREEN+"[*]Function name: " + function_name+RESET);
                        console.log(YELLOW+"[*]Native method address: " + methodAddress.toString()+RESET);

                        Interceptor.attach(methodAddress, {
                            onEnter: function(args) {
                                console.log("\n----------------------------------------------------------")
                                console.log(GREEN+"[*]Calling " + function_name+RESET);
                            },
                            onLeave: function(retval) {
                                try {
                                    var env = Java.vm.getEnv();

                                    if (env.isInstanceOf(retval, env.findClass("[B"))) {
                                        // Handle byte array

                                        var length = env.getArrayLength(retval);
                                        console.log(GREEN+"[*]length of byteArray", length+RESET)
                                        var baseAddress = env.getByteArrayElements(retval, null);
                                        var byteArray = Memory.readByteArray(baseAddress, length);
                                        console.log(GREEN+"[*]baseAddress  -->", baseAddress+RESET);
                                        console.log(BLUE+"[*]byteArray    \n", byteArray);
                                        console.log(""+RESET)

                                        // Release byte array elements
                                        env.releaseByteArrayElements(retval, baseAddress, 0);
                                    } else if (env.isInstanceOf(retval, env.findClass('java/lang/String'))) {
                                        // Handle Java String
                                        var stringValue = env.getStringUtfChars(retval, null).readCString();
                                        console.log(YELLOW+"[*]Return value is a string: " + stringValue+RESET);
                                    }else
                                        {
                                        // Handle other types or default case
                                        console.log(RED+"[!]Return value is of unknown type: " + retval+RESET);
                                    }
                                } catch (error) {
                                    console.log(RED+"[!]Error handling return value: " + error.message+RESET);
                                    console.log(RED+"[!]Raw return value: " + retval+RESET);
                                }
                            }
                        });
                    } else {
                        console.log(RED+"[!]Function name: " + function_name + " not found."+RESET);
                    }
                });
                library_loaded = false;
            }
        }
    });
});