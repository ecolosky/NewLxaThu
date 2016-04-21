# =============================================
#       Python JS genreator - uses directory structure
#                            to create  js gallery code
#       Ed Colosky
#       April, 2016
# =============================================
import os, sys
import Image

def genTitle(dirName):
    titleList = dirName.split('_')
    rtrnStr = titleList[0]
    titleList = titleList[1:]
    for item in titleList:
        rtrnStr = rtrnStr + " "+ item

    return rtrnStr

OutputLines = []
Subtitles = []
parentDir = os.getcwd()
parentDir = parentDir.split('/')
parentFolder = parentDir[-1]
year = parentFolder[:4]
line = "$scope.on"+year+"ReunionClick = function(item){ "
OutputLines.append(line)
for folder in os.listdir(os.getcwd()):
    # new if statement code here

    subtitle = genTitle(folder)
    Subtitles.append(subtitle)
    line = "\tif(item == '"+subtitle+"'){"
    OutputLines.append(line)
    line = "\t\t$scope.title = '"+year+ " Reunion - "+subtitle+"';"
    OutputLines.append(line)
    line = "\t\tself.images = ["
    OutputLines.append(line)

    # change CWD to a child dir
    os.chdir(folder)
    for file in os.listdir(os.getcwd()):
        if file.endswith(".jpg") or file.endswith(".JPG"):
            if file.startswith("tn_") == False:
                tnFileName = "tn_" + file
                # Output string format
                StrOut = "\t\t\t{thumb: 'img/"+parentFolder+"/"+folder+"/"+ tnFileName +"', img: 'img/"+parentFolder+"/"+folder+"/"+ file +"'},"
                OutputLines.append(StrOut)

    # return to parent of CWD
    os.chdir("..")
    # close list of images
    line = "\t\t];"
    OutputLines.append(line)
    line = "\t}"
    OutputLines.append(line)

# close function
line = "}"
OutputLines.append(line)

# Output the lines to the file
fo = open("js_image_list.txt", "w+")
for line in OutputLines:
    fo.write(line + '\n')

# add an item string file
dropDownStr = "$scope.DropDown_"+year+" = ['"
for item in Subtitles:
    dropDownStr = dropDownStr + item + "','"

dropDownStr = dropDownStr[:-2]
dropDownStr = dropDownStr + "];"
fo.write(dropDownStr)

fo.close()
