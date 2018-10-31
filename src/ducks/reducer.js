const initialState = {
    userid : '',
    username : '',
    email : '',
    address : '',
    profile_pic : '',
    password : '',
    vehicle_profileid: '',	
    title: '',	
    price: '',	
    vehicle_type: '',	
    manufacturers: '',	
    mpg: ''
}

const UPDATE_USERID = 'UPDATE_USERID';

const UPDATE_USERNAME = 'UPDATE_USERNAME';

const UPDATE_EMAIL = 'UPDATE_EMAIL';

const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

const UPDATE_PROFILEPIC = 'UPDATE_PROFILEPIC';

const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const UPDATE_VEHICLE_PROFILEID = '' ;	

const UPDATE_TITLE = 'UPDATE_TITLE';

const UPDATE_PRICE = 'UPDATE_PRICE';

const UPDATE_VEHICLE_TYPE = 'UPDATE_VEHICLE_TYPE';

const UPDATE_MANUFACTURERS = 'UPDATE_MANUFACTURERS';

const UPDATE_MPG = 'UPDATE_MPG';
  

export default function reducer(state = initialState, action){

    switch(action.type) {
        case UPDATE_USERID:
            return Object.assign({}, state, {userid: action.payload});
        case UPDATE_USERNAME:
            return Object.assign({}, state, {username: action.payload});
        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case UPDATE_PROFILEPIC:
            return Object.assign({}, state, {profile_pic: action.payload});
        case UPDATE_PASSWORD:
            return Object.assign({}, state, {password: action.payload});
        case UPDATE_VEHICLE_PROFILEID:
            return Object.assign({}, state, {vehicle_profileid: action.payload});
        case UPDATE_TITLE:
            return Object.assign({}, state, {title: action.payload});
        case UPDATE_PRICE:
            return Object.assign({}, state, {price: action.payload});
        case UPDATE_VEHICLE_TYPE:
            return Object.assign({}, state, {vehicle_type: action.payload});
        case UPDATE_MANUFACTURERS:
            return Object.assign({}, state, {manufacturers: action.payload});
        case UPDATE_MPG:
            return Object.assign({}, state, {mpg: action.payload});
        default: return state;
    }
}

export function updateUserId(userid){
    return {
        type: UPDATE_USERID,
        payload: userid
    }
}

export function updateUsername(username){
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export function updateAddress(address){
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updatePassword(password){
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export function updateProfilePic(profile_pic){
    return {
        type: UPDATE_PROFILEPIC,
        payload: profile_pic
    }
}

export function updateVehicleProfileId(vehicle_profileid){
    return {
        type: UPDATE_VEHICLE_PROFILEID,
        payload: vehicle_profileid
    }
}

export function updateTitle(title){
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}

export function updatePrice(price){
    return {
        type: UPDATE_PRICE,
        payload: price
    }
}

export function updateVehicleType(vehicle_type){
    return {
        type: UPDATE_VEHICLE_TYPE,
        payload: vehicle_type
    }
}

export function updateManufacturers(manufacturers){
    return {
        type: UPDATE_MANUFACTURERS,
        payload: manufacturers
    }
}

export function updateMpg(mpg){
    return {
        type: UPDATE_MPG,
        payload: mpg
    }
}