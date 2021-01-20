# TypeScript
Best Practices for Writing Readable and Maintainable Code in JavaScript with the best of these superset features of JavaScript. About the compilation to Javascript, strictly speaking, the Javascript is transpiled/transcompiled non compiled by Typescript.

    Transpilation: high-level programming language to another high-level programming language.
    Compilation: high-level programming language to low-level programming language or low-level intermediate language (e.g., il bytecode, il p-Code, binary Julia / Golang / Rust, etc).

## Type Annotations (:Type)
Be able to declare or annotate type values for example (variables, constants, arrays, function parameters even function return values) in order to make your source code a lot more readable and error-free.

## Type Aliases
Be able to rename pre-existing data types for example (primitive types, custom classes, unions, and generics) in order to achieve a more legible/readable and maintainable code.

## Union Types
Be able to have more than one data type for a value, this includes (variables, constants, function parameters and even return values).

## Intersection Types
Intersection types are closely related to union types, but they are used very differently. An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a type which is all of Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

## Object Literals
Be able to achieve more natural control of flow as an alternative to switch statements. Objects are more extensible, maintainable. Object literals can contain functions as well as any other Object type so giving more flexibility.

### Anonymous Functions (arrow function, function literal, lambda abstraction, lambda function, lambda expression or closures)
Be able to have a function that was declared without any named identifier, these are often arguments being passed to higher-order functions, or used to compose the result of a higher-order. 
They are named too (arrow function, function literal, lambda abstraction, lambda function, lambda expression, or closures).

## Generic Types
Be able to abstract types / to build reusable components in order to create flexible and scalable components that work with any data type and not restrict to one type.
The generics have an extra feature "extend" in order to extend from a base interface or class, so giving you the ability to limit to just specific types.

### Rest Parameters
Be able to call a function with any number of arguments, no matter how it is defined. This is useful to pass a variable number of parameters.

## Extensions
Be able to extend the Language by creating you own extensions with Prototype.

# Shortcuts to run
tsc type-annotations/main && node type-annotations/main

tsc type-aliases/main && node type-aliases/main

tsc union-types/main && node union-types/main

tsc object-literals-lambdas/main && node object-literals-lambdas/main

tsc generic-types-rest-parameters/main && node generic-types-rest-parameters/main

tsc extensions/main && node extensions/main

> "Any developer can write code, the best programmers conceive art."
>
> -- <cite>Marco Guillén</cite>