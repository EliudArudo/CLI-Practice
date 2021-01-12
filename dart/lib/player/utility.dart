String printWithBuffer(String string, int bufferLength) {
  var buffer = "";
  for (var i = 0; i < bufferLength; i++) {
    if (i < string.length) {
      buffer += string[i];
    } else {
      buffer += " ";
    }
  }

  return buffer;
}

bool stringIsValid(String string) {
  return string.length > 0;
}

void printFieldErrorMessage() {
  print("Please try again, invalid input");
}
