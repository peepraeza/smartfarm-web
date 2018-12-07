from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def control(request):
    return render(request, "control.html")
    
def graph(request):
    return render(request, "graph.html")
    
def vegetable(request):
    return render(request, "vegetable.html")
    
def add_vegetable(request):
    return render(request, "veg.html")
