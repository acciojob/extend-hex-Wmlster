const extendHex = (shortHex) => {
  // write your code here

	let s="#";

	for(let i=0;i<shortHex.length;i++)
		{
			if(shortHex[i]=='#')
			{
				continue;
			} 

			if(i>0&shortHex[i]==shortHex[i-1])
			{
				continue;
			}
			
			s+=shortHex[i]+shortHex[i];
		}

	return s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
