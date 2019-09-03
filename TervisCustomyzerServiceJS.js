var $CustomyzerServiceRootURI

function Initialize_TervisCustojmyzerServiceJS ({
    $EnvironmentName 
}) {
    $EnvironmentNameToPrefixMap = {
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
    var $Response = await fetch ($URL, 
    {
        method: "GET",
        headers: {
            'Content-Type': "application/json; charset=utf-8"
        }
    })

    return $Response.json()
}

async function Get_TervisCustomyzerServiceProject ({
    $ProjectID
}) {
    return await Invoke_CustomyzerService ({ $Path: `projects/${$ProjectID}` })
}