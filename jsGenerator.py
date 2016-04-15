# =============================================
#       Python thumbnail and JS genreator
#       Ed Colosky
#       April, 2016
# =============================================
import os, sys
import Image

# Thumbnail image size
tnSize = 200, 200
# Output file
fo = open("js_image_list.txt", "w+")
for folder in os.listdir(os.getcwd()):
    # new function code here
    # change CWD to a child dir

    for file in os.listdir(os.getcwd()):
        if file.endswith(".jpg") or file.endswith(".JPG"):
            tnFileName = "tn_" + file
            try:
                im = Image.open(file)
                im.thumbnail(tnSize, Image.ANTIALIAS)
                im.save(tnFileName, "JPEG")
            except IOError:
                print "cannot create thumbnail for: " + file
            # Output string format
            StrOut = "{thumb: 'img/2010_Reunion/Ed_and_Madeline_photos/"+ "tn_" + file +"', img: 'img/2010_Reunion/Ed_and_Madeline_photos/"+ file +"'}, \n"
            fo.write(StrOut)

    # return to parent of CWD
    # close function
    # append toi item list for populating the acordian
fo.close()
