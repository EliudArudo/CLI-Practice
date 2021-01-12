import 'dart:io';

/* ---------------------------------------------------- */
String input(String prompt) {
  stdout.write(prompt);
  String selection = stdin.readLineSync().trim();
  return selection;
}
/* ---------------------------------------------------- */

String getSelection() {
  print("==================================");
  String selection =
      input("Enter your choice (Q to quit): ").trim().toUpperCase();
  return selection;
}
