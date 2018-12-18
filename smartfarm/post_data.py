def parse_keys(keys, post_inst):
    _res_dict = {}
    for k, t in keys.items(): 
        _res_dict[t[0]] = t[1](post_inst.get(k).encode('utf-8'))
    return _res_dict
    
################# ITEMS TO PARSE #################
    
Plant_keys = {
    "type-name": ["type_name", str],
    "duration": ["duration", int],
}

##################################################

def parse_keys2(p_type, time, sensor):
    _res_dict = {}
    _res_dict["plant_type"] = str(p_type.encode('utf-8'))
    _res_dict["start_plant_timestamp"] = str(time)
    _res_dict["end_plant_timestamp"] = str(time)
    _res_dict["sensor"] = str(sensor).encode('utf-8')
    _res_dict["is_harvested"] = False
    return _res_dict
    
################# ITEMS TO PARSE #################
    
Plant_keys2 = {
    # "plant-type": ["plant_type", str],
    "start-plant-timestamp": ["start_plant_timestamp", str],
    "end-plant-timestamp": ["end_plant_timestamp", str],
    "is-harvested": ["is_harvested", str],
    # "sensor": ["sensor", str],
}

##################################################