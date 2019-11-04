#include<iostream>
#include<stdio.h>
#include<unistd.h>
using namespace std;

int main(int argc,char* argv[])
{
	printf("HELLO WASM!\n");

	for(int i=0;i<argc;i++)
		printf("arg[%d]: %s\n",i,argv[i]);

    return 0;
}

extern "C" int test_cpp_func1(int a,int b);
int test_cpp_func1(int a, int b)
{
	static int cnt = 0;
	cnt+=1;
	
	printf("[%d] This is test_cpp_func1: result = [%d]\n",cnt,a+b);
	
	return a+b;
}

extern "C" void canvas_draw(void);
extern "C" void hello_click(void);

extern "C" void test_cpp_func2(void);
void test_cpp_func2(void)
{
	hello_click();
	canvas_draw();
}
