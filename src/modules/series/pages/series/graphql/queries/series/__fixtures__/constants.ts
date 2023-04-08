import { GraphQLError } from "graphql";

import { SeriesQueryReturn } from "@app/modules/series/pages/series/graphql/queries/series/types";

export const seriesQueryErrorMock = new GraphQLError("Error to fetch Series");

export const seriesQueryReturnMock: SeriesQueryReturn = {
    series: [
        {
            id: "base",
            name: "Base",
            logo: "https://assets.tcgdex.net/en/base/base1/logo",
        },
        {
            id: "neo",
            name: "Neo",
            logo: "https://assets.tcgdex.net/en/neo/neo1/logo",
        },
        {
            id: "gym",
            name: "Gym",
            logo: "https://assets.tcgdex.net/en/gym/gym1/logo",
        },
    ],
};
