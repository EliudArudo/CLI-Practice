#include "PlayerUtility.hpp"

/*
  Don't include the keyword static here since we already did in the .hpp file 
*/
std::string Utility::printWithBuffer(std::string string, int bufferLength)
{
    std::string buffer = "";
    /* Length gives size_type */
    int stringLength = static_cast<int>(string.length());
    for (int i = 0; i < bufferLength; i++)
    {
        if (i < stringLength)
        {
            buffer += string[i];
        }
        else
        {
            buffer += " ";
        }
    }

    return buffer;
}

bool Utility::stringIsValid(std::string string)
{
    return string.length() > 0;
}

void Utility::printFIeldErrorMessage()
{
    std::cout << "Please try again, invalid input" << std::endl;
}