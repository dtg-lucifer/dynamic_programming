#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);

	printf("\n\n");

    for (int i = 1; i <= 2 * n - 1; i++) {
        for (int j = 1; j <= 2 * n - 1; j++) {
            int max_val = fmax(abs(n - i), abs(n - j)) + 1;
            printf("%d ", max_val);
        }
        printf("\n");
    }

    return 0;
}