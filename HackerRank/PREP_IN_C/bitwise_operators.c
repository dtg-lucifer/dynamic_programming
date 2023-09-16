#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void calculate_the_maximum(int n, int k) {
    int maxA = 0, maxO = 0, maxX = 0;
    for(int i = 1; i < n; i++) {
        for(int j = i + 1; j <= n; j++) { 
            if(maxA < (i & j) && k > (i & j)) maxA = i & j;
            if(maxO < (i | j) && k > (i | j)) maxO = i | j;
            if(maxX < (i ^ j) && k > (i ^ j)) maxX = i ^ j;
        }
    }
    printf("%d\n", maxA);
    printf("%d\n", maxO);
    printf("%d\n", maxX);
}

int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
 
    return 0;
}
