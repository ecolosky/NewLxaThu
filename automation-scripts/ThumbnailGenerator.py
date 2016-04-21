# =============================================
#       Python thumbnail genreator
#       Ed Colosky
#       April, 2016
# =============================================
import os, sys
import Image

# Thumbnail image size
tnSize = 200, 200
for folder in os.listdir(os.getcwd()):
    # change CWD to a child dir
    os.chdir(folder)
    print os.getcwd()
    for file in os.listdir(os.getcwd()):
        if file.endswith(".jpg") or file.endswith(".JPG"):
            tnFileName = "tn_" + file
            try:
                im = Image.open(file)
                im.thumbnail(tnSize, Image.ANTIALIAS)
                im.save(tnFileName, "JPEG")
            except IOError:
                print "cannot create thumbnail for: " + file

    # return to parent of CWD
    os.chdir("..")
