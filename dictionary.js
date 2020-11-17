var dict = '<?xml version="1.0" encoding="UTF-8"?><dictionary>    <norman>        <entry>A 1. the male or positive principle, yang 2. convex, raised 3.interjection ofresponse 4. interjection of fear S. vocative particle 6. a tooth in the Manchuscript A A an interjection of casual response </entry>        <entry>A I BUKDAN the outside edge of a piece of folded paper </entry>        <entry>A JIJUN I ACANGGA a bronze identification token with raised characters used togain admittance to a city at night </entry>        <entry>A JILGAN a yang tone in music A FA SERE ONGGOLO see afanggala </entry>        <entry>A SI a sound used for driving chickens or birds </entry>        <entry>A TA (onom.) the sound of a commotion ABA 1. hunt, battue 2. where     </norman></dictionary>';


//NOTE: if your XML contains any ' characters it will break.. search replace your dictionary for the ' character first replace it with " maybe, this is the fastest solution to this, ok if your dictionary is not dynamic

function searchXML() {

  var term = document.getElementById('srch').value;

  getNextEntry(term, 0, dict.length-1);
}

function getNextEntry(term, startIndexPos, endIndexPos){

    var n = dict.indexOf(term, startIndexPos,endIndexPos);
    if (n > 0) {
        //found hit
        addHitToDIV(n);
        getNextEntry(term, n + term.length + 1, endIndexPos);

    } else {
        //done searching

        return -1;
     }


}
function addHitToDIV(startIndexPos) {
    var fullEntry;
    var first = dict.lastIndexOf("<entry>", startIndexPos);
    var last = dict.indexOf("</entry>", startIndexPos,dict.length-1);
    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + "<p>" + dict.substring(first+7, last-1) + "</p><br>";
}
