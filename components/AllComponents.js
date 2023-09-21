class App extends OpenScript.Component {
    render(...args) {

        return h.div(
            { class: "container" },
            h.div(
                { class: "header" },
                h.h2("Quote generator")
            ),
            h.div(
                { class: "main-content" },
                 h.Quote(context('global').quote)
            ),
            ...args

        )

    }


}
class Quote extends OpenScript.Component {
    render(quote, ...args) {


        return h.div(
            h.div(
                { class: "text-area" },
                h.span(
                    { class: "quote" },

                    quote?.content
                )
            ),
            h.div(
                { class: "person" },
                quote?.author
            ),
            ...args
        )

    }
}