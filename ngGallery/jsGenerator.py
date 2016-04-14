
lastPhotoNum = 115
i = 49
while i <= lastPhotoNum:
    if(i < 100):
        photoNum = '0'+ str(i)
    else:
        photoNum = str(i)
    string = "{thumb: 'img/2014_Reunion/"+ photoNum +"_tn.jpg', img: 'img/2014_Reunion/"+ photoNum +".JPG'},"
    print string
    i += 1
