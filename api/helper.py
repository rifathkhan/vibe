from django.http import HttpResponse
from django.shortcuts import render 
import requests
import sys
from subprocess import run, PIPE
import base64
import datetime
from urllib.parse import urlencode
import requests
from rest_framework.response import Response
import requests
client_id = "64e21893d2304cb79783c4960e5ac3b3"
client_secret = "3767a2c012f940afb65b0b065818c775"

class SpotifyAPI(object):
    access_token = None
    access_token_expires = datetime.datetime.now()
    access_token_did_expire = True
    client_id = None
    client_secret = None
    token_url = "https://accounts.spotify.com/api/token"
    
    def __init__(self, client_id, client_secret, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.client_id = client_id
        self.client_secret = client_secret

    def get_client_credentials(self):
        """
        Returns a base64 encoded string
        """
        client_id = self.client_id
        client_secret = self.client_secret
        if client_secret == None or client_id == None:
            raise Exception("You must set client_id and client_secret")
        client_creds = f"{client_id}:{client_secret}"
        client_creds_b64 = base64.b64encode(client_creds.encode())
        return client_creds_b64.decode()
    
    def get_token_headers(self):
        client_creds_b64 = self.get_client_credentials()
        return {
            "Authorization": f"Basic {client_creds_b64}"
        }
    
    def get_token_data(self):
        return {
            "grant_type": "client_credentials"
        } 
    
    def perform_auth(self):
        token_url = self.token_url
        token_data = self.get_token_data()
        token_headers = self.get_token_headers()
        r = requests.post(token_url, data=token_data, headers=token_headers)
        if r.status_code not in range(200, 299):
            raise Exception("Could not authenticate client.")
            # return False
        data = r.json()
        now = datetime.datetime.now()
        access_token = data['access_token']
        expires_in = data['expires_in'] # seconds
        expires = now + datetime.timedelta(seconds=expires_in)
        self.access_token = access_token
        self.access_token_expires = expires
        self.access_token_did_expire = expires < now
        return True
    
    def get_access_token(self):
        token = self.access_token
        expires = self.access_token_expires
        now = datetime.datetime.now()
        if expires < now:
            self.perform_auth()
            return self.get_access_token()
        elif token == None:
            self.perform_auth()
            return self.get_access_token() 
        return token
    
    def get_resource_header(self):
        access_token = self.get_access_token()
        headers = {
            "Authorization": f"Bearer {access_token}"
        }
        return headers
        
        
    def get_resource(self, lookup_id, resource_type='albums', version='v1'):
        endpoint = f"https://api.spotify.com/{version}/{resource_type}/{lookup_id}"
        headers = self.get_resource_header()
        r = requests.get(endpoint, headers=headers)
        if r.status_code not in range(200, 299):
            return {}
        return r.json()
    
    def get_album(self, _id):
        return self.get_resource(_id, resource_type='albums')
    
    def get_artist(self, _id):
        return self.get_resource(_id, resource_type='artists')
    
    def base_search(self, query_params): # type
        headers = self.get_resource_header()
        endpoint = "https://api.spotify.com/v1/search"
        lookup_url = f"{endpoint}?{query_params}"
        r = requests.get(lookup_url, headers=headers)
        if r.status_code not in range(200, 299):  
            return {}
        return r.json()

    def search(self, query=None, operator=None, operator_query=None, search_type='artist' ):
        if query == None:
            raise Exception("A query is required")
        if isinstance(query, dict):
            query = " ".join([f"{k}:{v}" for k,v in query.items()])
        if operator != None and operator_query != None:
            if operator.lower() == "or" or operator.lower() == "not":
                operator = operator.upper()
                if isinstance(operator_query, str):
                    query = f"{query} {operator} {operator_query}"
        query_params = urlencode({"q": query, "type": search_type.lower()})
        print(query_params)
        return self.base_search(query_params)

sp = SpotifyAPI(client_id, client_secret)

def parser_artist(dict1):

    listt = []                                                                            
    i = 0                                                                                 
    x =0                                                                                  
    while x < 6 : 
        
                                                                      
        listt.append(dict1["artists"]["items"][i]["name"])                                  
        listt.append(dict1["artists"]["items"][i]["popularity"])                            
        listt.append(dict1["artists"]["items"][i]["followers"]["total"])                    
        listt.append(dict1["artists"]["items"][i]["external_urls"]["spotify"])              
        listt.append(dict1["artists"]["items"][i]["images"][0]["url"])                      
        i+=1                                                                                
        x+=1                                                                                
    output = {"a":{},"b":{}, "c":{}}                                                                                                              
    lista = ["name", "pop", "total", "url", "image"]                                      
    i = 0                                                                                 
    e = 5                                                                                 
    g = 10                                                                                
    h = 15                                                                                
    y = 20                                                                                
    for j in lista:                                                                       
        counter = 0                                                                       
        if counter < 4:                                                                   
            output["a"][f"{j}"]= listt[i]                                                   
            i += 1                                                                          
            counter += 1                                                                    
            if counter < 12:                                                                
                output["b"][f"{j}"] = listt[e]                                                
                e+=1                                                                          
                counter+=1                                                                    
                if counter < 18:                                                              
                    output["c"][f"{j}"] = listt[g]                                              
                    g+=1                                                                        
                    counter+=1
    return output       

def parser_track(dict2):
    
    listt = []
    i = 0
    x =0
    while x < 6 :
        listt.append(dict2["tracks"]["items"][i]["name"])
        listt.append(dict2["tracks"]["items"][i]["album"]["artists"][0]["name"])
        listt.append(dict2["tracks"]["items"][i]["id"])
        listt.append(dict2["tracks"]["items"][i]["uri"])
        listt.append(dict2["tracks"]["items"][i]["popularity"])
        i+=1
        x+=1
    output = {"a":{},"b":{}, "c":{}}
    print(listt)
    lista = ["song name", "artist name", "id", "uri", "popularity"]
    i = 0
    e = 5
    g = 10
    h = 15
    y = 20
    for j in lista:
        counter = 0
        if counter < 6:
            output["a"][f"{j}"]= listt[i]
            i += 1
        counter += 1
        if counter < 12:
            output["b"][f"{j}"] = listt[e]
            e+=1
            counter+=1
            if counter < 18:
                output["c"][f"{j}"] = listt[g]
                g+=1
                counter+=1
    return output  
                                                 
                    