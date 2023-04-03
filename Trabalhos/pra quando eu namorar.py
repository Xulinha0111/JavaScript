import tkinter
from tkinter import messagebox

root = tkinter.Tk()
root.withdraw

count = 0

msg_box = messagebox.showwarning("TOMA DISTRAÍDO!", "VOCÊ FOI HACKEADO!!!")
 
if msg_box == "ok":
    msg_box = messagebox.askquestion("O QUE ACHA?!", "ACEITA ME NAMORAR?")

while msg_box == "no":
    count += 1
    msg_box = messagebox.askquestion("O QUE ACHA?!", "ACEITA ME NAMORAR?")
    if (count == 5):
        msg_box = messagebox.showerror("CÊ TÁ DOIDO?!", "TÔ INDO AÍ PRA TE BATER >:(")
        break

if msg_box == "yes":
    msg_box = messagebox.showinfo("PARABÉNS!!!", "VOCÊ FEZ UMA SÁBIA ESCOLHE, VEM SER FELIZ :) <3")

#-- https://www.instagram.com/reel/CoDwwu-pxYo/?igshid=YmMyMTA2M2Y= --#