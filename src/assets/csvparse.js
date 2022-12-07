import Papa from 'papaparse'

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRebyURthls2ga-0IZ6mih9VmIuyW2yI9uYW8U0wSW-TL4C6stdM01eCnnwASFnUA/pub?output=csv'


Papa.parse(url, {
	download: true,
	// rest of config ...
})
