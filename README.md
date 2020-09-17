# IDeserializable vs Constructor
After experimenting with deserialization in another angular app, 
which was ideal to solve the issue of lost proprties (method and getters/setters) on data models,
I realised a similar thing can be achieved by simply using a constructor and expliciting calling it for each object. 
This requires a little more code, though not too much in my opinion. 

However, I want to test for any noticable performance impact doing it one way vs the other, 
and also against not doing it at all (which isn't ideal as we lose those properties as previously mentioned).

The results from the various tests I did here show that there is no noticable difference between any of the 3 methods of doing it, 
so when it comes to API calls and assigning JSON model data to your actual models, it is really a matter of preference. 
