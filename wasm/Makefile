FUNCTIONS+=_main,
FUNCTIONS+=_test_cpp_func1,
FUNCTIONS+=_test_cpp_func2

CFLAGS+=-O3 -std=c++11
CFLAGS+=-s WASM=1
CFLAGS+=-s EXPORTED_FUNCTIONS=["$(FUNCTIONS)"]
CFLAGS+=-s ERROR_ON_UNDEFINED_SYMBOLS=0
CFLAGS+=--js-library ../test_js.js
#CFLAGS+=-s VERBOSE

all:
	em++ $(CFLAGS) main.cpp -o main.js
clean:
	rm -f ./main.js main.wasm
