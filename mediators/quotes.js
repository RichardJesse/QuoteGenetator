class QuoteDisher extends OpenScript.Mediator {
    async $$quoteStale() {
        let quotes = glc.quotes;
        let randomQuote = Math.floor(Math.random() * quotes.length);

        glc.quote.value = quotes[randomQuote];


    }

}