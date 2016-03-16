#Business Logic

The point of this folder is to allow a place where business logic can live.
This logic should be treated almost as a separate application. Although it
be bootstrapped as part of this application, the intent would be to have 
the ability to grow your application while reducing overall complexity by
building all the logic in this section in such a way that it can be moved 
into one or more microservices that communicate via a queue instead of an
in-memory process.

Right now these are all seneca plugins


##A couple test projects should validate/improve this model.