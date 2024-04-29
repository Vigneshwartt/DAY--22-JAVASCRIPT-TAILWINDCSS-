const button=document.querySelector('button')

button.addEventListener('click' ,displayStats)
function displayStats() 
{
    const input=document.getElementById('input')
    const city=input.options[input.selectedIndex].value
    let population =0,literacyRate =0,language=''
    switch(city){
        case'Bengaluru':
        Population=2388737
        literacyRate=88.32
        language='kannada'
        break

        case'Chennai':
        Population=4388737
        literacyRate=90.32
        language='Tamil'
        break
  
        case'Madurai':
        Population=188737
        literacyRate=68.32
        language='kongu Tamil'
        break
  
        case'Kerala':
        Population=388737
        literacyRate=58.32
        language='Malayalam'
        break
  
    }
    let text='The Indian city of ' + city+  ' has a Population of '+Population+'.Language spoken is '+language+' and literacy rate is '+literacyRate
    let resultdiv=document.createElement('div')
    //ithu vanthu already result iruku la athuka ithu css la 
     resultdiv.id='result'
     document.getElementById('whole').appendChild(resultdiv)
  
     document.getElementById('result').innerHTML=text


}
