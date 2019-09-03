var $CustomyzerServiceRootURI

export function Initialize_TervisCustojmyzerServiceJS ({
    $EnvironmentName 
}) {
    var $EnvironmentNameToPrefixMap = {
        Delta: "DLT",
        Epsilon: "EPS",
        Production: "PRD",
        Inrastructure: "INF",
        Zeta: "ZTA"
    }

    $CustomyzerServiceRootURI = `https://${$EnvironmentNameToPrefixMap[$EnvironmentName]}-customizerservices.azurewebsites.net/`
}

async function Invoke_TervisCustomyzerService ({
    $Path
}) {
    var $URL = $CustomyzerServiceRootURI + $Path
    const $IsBrowser = !(typeof window === 'undefined');
    if (!$IsBrowser) {
        var fetch = (await import("node-fetch")).default
    } else {
        var fetch = window.fetch
    }
    
    var $Response = await fetch ($URL, 
    {
        method: "GET",
        headers: {
            'Content-Type': "application/json; charset=utf-8"
        }
    })

    return $Response.json()
}

export async function Get_TervisCustomyzerServiceProject ({
    $ProjectID
}) {
    return await Invoke_TervisCustomyzerService ({ $Path: `projects/${$ProjectID}` })
}