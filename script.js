var headLn = document.querySelector('#headline');

    var allHeadChildren = headLn.querySelectorAll('span');
    let prvElm ;  
    allHeadChildren.forEach(function (childElm,index){
        // if(childElm.classList === undefined) {
        //     return;
        // };
        
        const currentElm = childElm;
        let currentElmWidth = childElm.clientWidth;
        childElm.style.width = currentElmWidth+1+"px"; 
        let nextElmWidth = allHeadChildren[index+1] !==undefined? allHeadChildren[index+1].clientWidth:'undefined';
      
       
        if(index==0){
            
            if(currentElmWidth>nextElmWidth){
                childElm.classList.add('bigFromNextElement'); 
            }else{
                childElm.classList.add('smallFromNextElement') ;
            }
            
        }else{
            let previousElmWidth = prvElm.clientWidth;

            //currentElm.classList.remove('small','big');
            if(nextElmWidth!=='undefined' && currentElmWidth>previousElmWidth && currentElmWidth<nextElmWidth){
                childElm.classList.add('bigFromPrviousButSmallFromNextElement') // this one smaller than previous line but Big to next line
            }else if(nextElmWidth!=='undefined' && currentElmWidth<previousElmWidth && currentElmWidth<nextElmWidth){
                childElm.classList.add('smallFromPrviousButSmallFromNextElement')
            }else if(nextElmWidth!=='undefined' && currentElmWidth>previousElmWidth && currentElmWidth>nextElmWidth){
                childElm.classList.add('bigFromPrviousButBigFromNextElement')
            }else if(nextElmWidth!=='undefined' && currentElmWidth<previousElmWidth && currentElmWidth>nextElmWidth){
                childElm.classList.add('smallFromPrviousButBigFromNextElement')
            }else if(nextElmWidth!=='undefined' && currentElmWidth>nextElmWidth){
                childElm.classList.add('bigFromNextElement'); 
            }else if(currentElmWidth>previousElmWidth){
                childElm.classList.add('bigFromPreviousElement'); 
            }else{
                childElm.classList.add('smallFromPreviousElement') 
            }
        }
        prvElm = childElm;
    });
