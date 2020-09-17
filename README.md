# What am I trying to solve?
On our models, we may want to do some additional stuff besides just storing data.
For example, we may want a getter which returns first and last name concatenated, or perhaps a function which performs some action the model data.
These things are perfectly reasonable to add to the model class, as they are things directly connected to the model itself, and would therefore 
not be suitable in other places such as components, or services.

I found a way to solve this using a deserializer, but later also thought that similar could be done just with a normal constructor. 

## What exactly is the problem?
If we go to the app component, and in the subscription for our normal getUsers call ("*getUsersJson()*"), which just returns the json result directly, 
which just happens to be the same shape as we User model.\
If we try to add a call to the function on the model *"tellMeSomething()"*, 
we will see that typescript is happy with this.\
It can autocomplete this for us, and will compile without issue. As far as typescript is aware, 
this is absolutely fine because we are expecting a User object (array) to be returned. However, this isn't actually what we get.

Although the observable in the service has told us we are going to return an array of user object, we actually just get the raw json from the api call. 
Raw json does not have any additional properties, like our functions, and therefore this is lost.\
We can address this by manually converting the json into actual objects, either through deserialization or through constructor functions. 

# IDeserializable vs Constructor
After experimenting with deserialization in another angular app, 
which was ideal to solve the issue of lost proprties (method and getters/setters) on data models,
I realised a similar thing can be achieved by simply using a constructor and expliciting calling it for each object. 
This requires a little more code, though not too much in my opinion. 

However, I want to test for any noticable performance impact doing it one way vs the other, 
and also against not doing it at all (which isn't ideal as we lose those properties as previously mentioned).

The results from the various tests I did here show that there is no noticable difference between any of the 3 methods of doing it, 
so when it comes to API calls and assigning JSON model data to your actual models, it is really a matter of preference. 
