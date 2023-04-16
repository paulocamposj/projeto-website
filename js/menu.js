let menu = () => {
    if(menuid.style.display == 'block'){
        menuid.style.display = 'none'
        navid.style.background = '#B90504'
        spanid.style.color = 'white'
    }else{
        menuid.style.display = 'block'
        navid.style.background = 'white'
        spanid.style.color = '#B90504'
    }
}