function count (string) {  
  const tmp = string.split(""),
        tmp2 = Array.from(new Set(string));
   
       let jbj = {};
    for (let j = 0; j < tmp2.length; j++) {
        let count = 0;
        for (let i = 0; i < tmp.length; i++) {
            if (tmp2[j] == tmp[i]) {
                count++
            }
        }
        jbj[tmp2[j]] = count;
    }
    return jbj;
}
