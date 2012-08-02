function validate_phone(phone){

    if (phone.indexOf("\(11\)") == 0){

        if (phone.length == 14 || phone.indexOf("\(11\) 79") == 0 || phone.indexOf("\(11\) 78") == 0 || phone.indexOf("\(11\) 77") == 0 || phone.indexOf("\(11\) 70") == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return true;
    }
}

function fix_phone(phone){
    var unmasked_phone = phone.replace("\(", "").replace("\)", "").replace(" ", "");
    var masked_phone = '(' + unmasked_phone.substring(0,2) + ") " + unmasked_phone.substring(2,14);
    if (!validate_phone(masked_phone)){
        return masked_phone.replace("\(11\) ", "\(11\) 9");
    }else{
        return masked_phone;
    }
}
