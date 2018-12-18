from django.shortcuts import render, redirect
from django.http import HttpResponse
from models import Plant, Vegetable, Control
from post_data import parse_keys, Plant_keys,parse_keys2, Plant_keys2
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json
from datetime import datetime
# from django.utils import timezone

key = {
  "type": "service_account",
  "project_id": "smart-farm-27e2b",
  "private_key_id": "baf1a2bdfb82f3dda04540034ac097fa7d1d6863",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCjYNrU7AmcAvdf\n7K5zGE6dNmxJzdC/9Hh4ihy6cxDsfpkp4rNCU7K06q2gPrM6ch6aJKTPwvASrckC\ncQuymQtgytr4MFWfjjOR16PuJxxJEzNcF/OovVnDJhQhyL8z4wVX3Qwb+21Q1yyg\nuqlUQdcOfp5/DXBrw0V8yIMNRcdZlnLrsL3oxH5edbtqdzUBP/wglk7LtexSowS4\nDg6mZ2btruAXPzGqxFcyKZNrmjgKah+JgPapO9oEwef/A4dCGKNZb30ETEhONCwF\nlkET6lrmXs4Zng/dbSdTLh2X1NObov9fdKP72TtBjCvMDbqtZ17wtVeU+Grcnd6u\nqd0aczwLAgMBAAECggEAIIuHrAiE9YYFvx8HtTevWVPhCGauYb6STPi+Nkn7ohCp\n9BULvnerzqw9AAHddBQNkokgJ57eceoac5kPSnmAMbzXF7+RHuKV1USOjD9QPCJO\nBddjm0Z03hH0yrIRnIVpqBIJen2ATi0+35mvZ3BiJaoFaqvDrEPO0Meki31N88NZ\n6WGEClPp/u12mc4b0rh9LbfBhBEDHEjqWYkZOsj4fZ2e1boCHwL59yICBmsSCLS5\ngm7RBFDH8mM0ivJnwvR2ckXnUzJAsfkvM5IZ+b4062AL+1Gvjpg67GRrw7j57EBs\nP9nEakrh2Z/FfcIhQSMvBD67T4TMiBpT9aXR728vkQKBgQDZcYP/eLJHlrTdZqb6\nJkrVrpBoYy22Vq70lnIoO/cDQmScmyXc0RXJkGUFnqA9Cqti7GHXtqtdHhb1dXMM\n/O3jkQYSDtfPStL9cukoqGvwPYPH4DKDoGTGp+zV4UoptJNA/UHb8O0l/8C/fAin\nmBf4zI0DgOKBwsY/eaFMKKoLuQKBgQDAWSTuXbe66UG6wIUTF0UUcKHPMcC4tsBh\nRBLLzuTN+r629Rd4tyXbYX0nN0HcBUeWDwaeuCv3GmnxnNxpJOe8dFb0JNHfyAZF\nAsbe97JyZNTXIpTtC1PD8FoBIt5nDMN0GRgqlBVvtHo89xlPprl2gbL0ooaVuVPs\noBXPiFMP4wKBgQC3XLtD1qL4LYUtYqASN/JJSSBrdp8YsPZuOOPhO9fr/rPbQBXo\npMRrqgEWgRJ9Bx9Jly5W+qp9Jp+Ts8wmOq/cg/ILjkq8ekt8AMfPSl9jQmx7Q3s1\ndi8lOnxES+v/SVAXsLk14HAK6CXBE7Y0pdQpMU0ElE3twLLu2gGDuJLUuQKBgQC6\nYOafLiJMs56kJc4MfJzMPIMdsDjtAvAQj5Si9bvRNyk7QOvYZacCF0ndCPcBCgCe\nj7q7avv2+Ro1KuiL3V3KxvRGp7LRYxFoJ1OqU1sO61Mtju29bx9gmfGsbiwQsFZn\nlbVL9Kd80OUtU8Wr34KQKQbNcvpz89s1Sr03lgHePwKBgQC6lF7TNn6/p4l09U+d\n+2kbac7ehrjSGmSEyu75BMU8IKuoOPcEPLVj3p9vPl1lEluXyxl5tbLgI73OWC4M\nnCoEPpXoXxBGup9L7iUfspP7Jot/V9+5IGbzf40GgD8+QQpyg0TQmFcVJML13HFN\nPvJ9mGpA8G8+KJrZOQwZpAyqwA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-atbs7@smart-farm-27e2b.iam.gserviceaccount.com",
  "client_id": "104462862666054572082",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-atbs7%40smart-farm-27e2b.iam.gserviceaccount.com"
}

cred = credentials.Certificate(key)
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://smart-farm-27e2b.firebaseio.com/'
})


def index(request):
    _v = Vegetable.objects.all()
    _p = Plant.objects.all()
    p
    return render(request, "index.html", {
        "vegs": _v,
        "plant": _p,
        
    })

def control(request):
    _c = Control.objects.all()
    return render(request, "control.html",{
        "status": _c,
    })
    
def graph(request):
    return render(request, "graph.html")
    
def meter(request):
    dinos = db.reference('A')
    result = dinos.order_by_child('time').limit_to_last(1).get()
    print("test")
    for key, val in result.items():
        air_humidity = val["data"]["air_humidity"]
        air_temperature = val["data"]["air_temperature"]
        soil_temperature = val["data"]["soil_temperature"]
        soil_moisure = val["data"]["soil_moisure"]
    return render(request, "meter.html", {"air_humidity": air_humidity,
                                          "air_temperature": air_temperature,
                                          "soil_temperature": soil_temperature,
                                          "soil_moisure": soil_moisure})
    
def view_vegetable(request):
    _v = Vegetable.objects.all()
    return render(request, "view_vegetable.html", {"vegs": _v})
    
def new_vegetable(request):
    return render(request, "new_vegetable.html")

def add_vegetable(request):
    if request.method == "POST":
        parsed_val = parse_keys(Plant_keys, request.POST)
        _v = Vegetable(**parsed_val)
        _v.save()
    return redirect("/vegetables/view/")
    
def add_plant(request):
    if request.method == "POST":
        parsed_val = parse_keys2(Plant_keys2, request.POST, Vegetable.objects.get(type_name=request.POST.get("plant-type")), datetime.now())
        # _p = Plant(plant_type=Vegetable.objects.get(type_name=request.POST.get("plant-type")), start_plant_timestamp=timezone.now, end_plant_timestamp=timezone.now)
        _p = Plant(**parsed_val)
        _p.save()
    return redirect("/")
    
def del_vegetable(request):
    ids = json.loads(request.POST.get("delete-ids"))
    Vegetable.objects.filter(pk__in=ids).delete()
    return redirect("/vegetables/view/")
    
def del_plant(request):
    id = int(request.POST.get("delete-id"))
    Plant.objects.filter(pk=id).delete()
    return redirect("/")
    
def edit_vegetable(request, id):
    _v = Vegetable.objects.get(pk=id)
    return render(request, "edit_vegetable.html", {
        "v": _v,
    })
    
def update_vegetable(request):
    id = int(request.POST.get("id"))
    parsed_val = parse_keys(Plant_keys, request.POST)
    Vegetable.objects.filter(pk=id).update(**parsed_val)
    return redirect("/vegetables/view/")
    
def test(request):
    if len(Control.objects.all()) == 0:
        _p = Plant(status="off")
        _p.save()
    elif len(Control.objects.filter(status="off")) > 0:
        Control.objects.filter(status="off").update(status="on")
    elif len(Control.objects.filter(status="on")) > 0: 
        Control.objects.filter(status="on").update(status="off")
    return HttpResponse()