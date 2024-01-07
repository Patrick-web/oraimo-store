
export interface MainCollectionType {
	name: string;
	image: string;
	link: string;
}




export interface Collection {
	link: string;
	image: string;
	name: string;
	slug: string;
	subCollections: SubCollection[];
}

interface SubCollection {
	link: string;
	name: string;
	slug: string;
}