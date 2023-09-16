#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    int size, sum = 0;
    scanf("%d", &size);
    
    int* arr = (int*)malloc(size * sizeof(int));
    
    for(int i = 0; i < size; i++) scanf("%d", arr + i);
    for(int i = 0; i < size; i++) sum += *(arr+i);
    
    printf("%d", sum);

	free(arr);
    
    return 0;
}
