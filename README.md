# StrongLoop and NativeScript Integration

This is an example of the blog post: [The Ultimate Guide For Native App Development](http:/mean.expert//2016/05/28/angular-2-ultimate-native-app)

```sh 
$ git clone git@github.com:jonathan-casarrubias/strongloop-nativescript.git
```

In order to make this example to run, please configure MongoDB Instance as described in the blog post, then:

```sh 
$ git clone git@github.com:jonathan-casarrubias/strongloop-nativescript.git
$ cd todo-api
$ npm install
$ cd ../todo-app
$ npm install
```

Now you can run the project by opening 2 terminals, 1 to run the API:

```sh 
$ cd todo-api
$ node .
```

And the other to run the Mobile App

```sh 
$ cd todo-app
$ tns livesync [android|ios] --watch
```

*Note: You need to have the android sdk or xcode prior this instructions*