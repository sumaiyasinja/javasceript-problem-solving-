function add(a, b){
    return a + b;
   }
   console.log(add("adam" + "eve"))

//    expaination
/*add("adam" + "eve")
This line attempts to call the add function with a single argument.
 The argument is the result of the expression "adam" + "eve",
  which concatenates (joins) the two strings "adam" and "eve" together 
  using the + operator. So, "adam" + "eve" evaluates to "adameve".

  Finally, the code  console.log(add("adam" + "eve")) attempts to 
  log the result of the add function call to the console. In this case, 
  the function call is add("adameve"), and
   since there's only one argument provided, a receives the value "adameve"
    while b remains undefined. JavaScript will attempt to 
  concatenate these values together since + is used in the add function.*/