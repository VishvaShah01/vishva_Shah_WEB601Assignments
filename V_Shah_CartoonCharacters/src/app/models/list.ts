import {Content} from './content'
export class List {
	private _contentArray: Content[];
	constructor()
	{
		// setup the array as an Empty initial..
		this._contentArray = [];
	}

	get content():Content[]{
		return this._contentArray;
	}

	addContent(Content:any)
	{
		this._contentArray.push(Content);
	}

	getLength()
	{
		return this._contentArray.length;
	}

	getData(index:number) {
		for(var i = 0; i < this.getLength(); i++) {
		    if(this._contentArray[i].id === index) {
			return `
			<div id="cardData" class="card bg-light m-5">
				<img src="${this._contentArray[index].imagelink}" class="cardData-img-top" alt="img">
					<div class="card-body">
						<h2 class="mb-3 cardData-title">Title - ${this._contentArray[index].title}</h2>
						<h3 class="mb-3 cardData-text">Type - ${this._contentArray[index].type}</h3>
                        <h3 class="mb-3 cardData-text">Author - ${this._contentArray[index].author}</h3>
						<p class="mb-3 cardData-text">Body - ${this._contentArray[index].body}</p>
					</div>
			</div>`
		    }
		}
		return `<div class="text-center">There is no data stored: ${index} wants to access</div>`;
	}

}