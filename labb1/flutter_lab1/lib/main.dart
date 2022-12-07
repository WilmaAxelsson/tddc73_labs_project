import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});


  // This widget is the root of your application.
  @override

  Widget build(BuildContext context) {

    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const MyHomePage(title: 'Example 1'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});


  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {

    Widget buttonSection = Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        _buildButtonColumn(Colors.grey, 'Button'),
        _buildButtonColumn(Colors.grey, 'Button')

      ],
    );

    Widget emailSection = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildEmailContainer()
      ],
    );

      return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: ListView(
            children: [
              Container(
                padding: const EdgeInsets.only(top: 10),
                child: Image.asset(
                  'images/dog_flutter.png',
                  width: 150,
                  height: 150,
                ),
              ),
              Container(
                padding: const EdgeInsets.only(top: 150),
                child: buttonSection,
              ),
              Container(
                padding: const EdgeInsets.only(top: 30),
                child: buttonSection,
              ),
              Container(
                padding: const EdgeInsets.only(top: 100),
                child: emailSection,
              ),

            ]
        ),
        //   ),
      );
    }
  }


Column _buildButtonColumn(Color color,String label) {
  return Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      TextButton(
        onPressed: () {},
        child: Container(
          color: color,
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 15),
          child: const Text(
            'Button',
            style: TextStyle(color: Colors.black, fontSize: 13.0),
          ),
        ),
      ),
    ],
  );
}

Row _buildEmailContainer(){
  return Row(
    children: [
      const Padding(
        padding: EdgeInsets.only(right: 100),
        child: Text("Email"),
        ),
        SizedBox(
          width: 220,
          child: TextFormField(
            //textAlign: TextAlign.left,
            decoration: const InputDecoration (
              border: UnderlineInputBorder(),
              //labelText: "Email",
            ),
          ),
        ),
    ],
  );
}
