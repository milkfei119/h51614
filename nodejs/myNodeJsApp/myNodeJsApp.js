var censoredWords = ["sad","bad","mad"];
var customCensoreWords = [];
// 过滤敏感词
function censor(instr){
	for(idx in censoredWords){
		instr = instr.replace(censoredWords[idx],"****");
	}
	for(idx in customCensoreWords){
		instr = instr.replace(customCensoreWords[idx],"****");
	}
	return instr;
}
// 添加自定义敏感词
function addCensoreWord(word){
	customCensoreWords.push(word);
}
// 获取默认和自定义的敏感词
function getCensoreWords(){
	return censoredWords.concat(customCensoreWords);
}
exports.censor = censor; //把模块中的函数开放给调用者
/*exports.addCensoreWord = addCensoreWord;
exports.getCensoreWords = getCensoreWords;*/
