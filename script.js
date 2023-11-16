const extendHex = (shortHex) => {
  // write your code here

	let s="#";

	for(let i=0;i<shortHex.length;i++)
		{
			s+=shortHex[i]+shortHex[i];
		}

	return s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
