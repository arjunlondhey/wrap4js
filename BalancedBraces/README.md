[Balanced Braces](https://www.notion.so/Balanced-Braces-f15abccc2d6d40fc8aeffe176525bbd2)

Determine if a string contains matching Braces, Brackets and Parentheses. Additionally all Braces, Brackets, and Parentheses must be nested correctly for JavaScript code.

All other characters in the string can be ignored.

**input**: String

**output**: true if all opening Braces/Brackets/Parentheses have matching closing Braces/Brackets/Parentheses that are correctly nested else false.

### Example

    "{}" => true
    "{()[{}[]]}" => true
    "{(})" => false
    "{()[}[]]}" => false
    "if(a==b) x = y;" => true
    "if(a==b x = y;" => false
    "if(x<10}(b++;}else{b+=10;}" => false

    // Sample test cases
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);
