# =============================================
#       Python file renamer
#       Ed Colosky
#       April, 2016
# =============================================
import os, sys

num = 1
for file in os.listdir(os.getcwd()):
    if file.endswith(".jpg") or file.endswith(".JPG"):
        os.rename(os.getcwd()+'/'+file,os.getcwd()+'/0'+ str(num) + ".jpg" )
        num +=1
