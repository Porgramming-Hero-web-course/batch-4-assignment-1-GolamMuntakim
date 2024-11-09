Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Type guards are necesary to provide type saftey and prevent autocompletation, where variables are more than one Type.Without type guards typescript sometimes become inaccurate, where variabel type could be union of multiple type.Type guard provide lot's of benefits , such as :
1) Type saftey.
2) Code Clarity.
3) prevent Auto Completation.

Various types of type guards are:

1. typeof : This operator is used to find the type when it is dealing with primitive type, like string, number , boolean etc.
example :
     if(typeof value === "type") {...}
2.Instance of: It is check whether an object is an instance of a specific class or sub class.
example : 
        if(value instanceof className){...}
3.In : It checks if a property exist in an object and can be used to find types in object.
example : 
        if('property' in value){...}
4.Custom Type Guards : It is a user-defines function that checks whether a variable is of a certain type.
example :
        function isType(value: any): value is type{...logic}
