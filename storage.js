class Storage{

    setStorage(source){
        let lastSourceStorage=this.getStorage();
        let lastSourceStorageSet=new Set(lastSourceStorage);
        if(lastSourceStorageSet.has(source)){
            //Var tekrardan ekleme yapma...
        }
        else{
            //Yok ekle
            lastSourceStorage.push(source);
            localStorage.setItem("lastSourceStorage",JSON.stringify(lastSourceStorage));
        }
    }

    getStorage(){
        let lastSourceStorage;
        if(localStorage.getItem("lastSourceStorage")===null){
            lastSourceStorage=[];          
        }
        else{
            lastSourceStorage=JSON.parse(localStorage.getItem("lastSourceStorage"));
        }
        return lastSourceStorage;
    }
    clearStorage(){
        localStorage.removeItem("lastSourceStorage");
    }
}