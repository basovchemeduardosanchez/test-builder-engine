var init = { 
	/* TODO: The following object should be replaced by the report engine integration so the data is pulled from a REST service */
	/* TODO: The data population on the table will be performed from the form engine */
     'questions': [ 
       {
           'question': 'jQuery is a...',
           'answers': ['JavaScript library','Ruby Gem','PHP Framework','None of the above'],
			  'correctAnswer': 1
       },
       {
           'question': 'X comes after?',
           'answers': ['P','W','Y','v'],
			  'correctAnswer': 2
       },
		 {
           'question': 'What is SSH',
           'answers': ['NULL','Sampling Shell','a bash command','secure shell'],
			  'correctAnswer': 4
       }
	 ],
	 /* TODO: The following settings should be pulled from the report engine connected to a table in order to provide the user with and interface to select data to be deployed in a pseudo query format */
	  'resultComments' :  
	  {
		    perfect: 'Great Job!!',
			excellent: 'Outstanding!',
			good: 'Acceptable, requires additional training.',
			average: 'Your performance is borderline.',
			bad: 'Your performance is bad requires review and proper training.',
			poor: 'Your result is unacceptable',
			worst: 'Not applicable fo further evaluations'
	  }

 };