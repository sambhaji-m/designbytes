module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/dashboard/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dashboard.json.[json].cjs [app-route] (ecmascript)");
;
;
const allowedPeriods = [
    "today",
    "month",
    "year"
];
function normalizePeriod(period) {
    return allowedPeriods.includes(period) ? period : "today";
}
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const period = normalizePeriod(searchParams.get("period"));
    const data = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dashboard$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: {
            processQuality: data.processQuality,
            frequencyRate: data.frequencyRate,
            severityRate: data.severityRate,
            accidents: {
                total: data.accidents.total,
                period,
                items: data.accidents.periods[period]
            }
        }
    });
}
}),
"[project]/src/data/dashboard.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "processQuality": {
        "financialYear": "FY24-25",
        "target": 430,
        "months": [
            {
                "month": "Apr",
                "production": 46,
                "defects": 455
            },
            {
                "month": "May",
                "production": 31,
                "defects": 400
            },
            {
                "month": "Jun",
                "production": 50,
                "defects": 350
            },
            {
                "month": "Jul",
                "production": 39,
                "defects": 300
            },
            {
                "month": "Aug",
                "production": 18,
                "defects": 370
            },
            {
                "month": "Sep",
                "production": 28,
                "defects": 295
            },
            {
                "month": "Oct",
                "production": 39,
                "defects": 355
            },
            {
                "month": "Nov",
                "production": 50,
                "defects": 450
            },
            {
                "month": "Dec",
                "production": 28,
                "defects": 310
            },
            {
                "month": "Jan",
                "production": 39,
                "defects": 355
            },
            {
                "month": "Feb",
                "production": 43,
                "defects": 370
            },
            {
                "month": "Mar",
                "production": 50,
                "defects": 365
            }
        ]
    },
    "frequencyRate": {
        "monthLabel": "May'24",
        "monthValue": 87,
        "yearLabel": "FY 24-25",
        "yearValue": 87
    },
    "severityRate": {
        "monthLabel": "May'24",
        "monthValue": 87,
        "yearLabel": "FY 24-25",
        "yearValue": 87
    },
    "accidents": {
        "total": 99,
        "periods": {
            "today": [
                {
                    "name": "LMHP",
                    "total": 30,
                    "reportable": 10,
                    "nonReportable": 20
                },
                {
                    "name": "HHP",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                },
                {
                    "name": "Genset",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                }
            ],
            "month": [
                {
                    "name": "LMHP",
                    "total": 30,
                    "reportable": 10,
                    "nonReportable": 20
                },
                {
                    "name": "HHP",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                },
                {
                    "name": "Genset",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                }
            ],
            "year": [
                {
                    "name": "LMHP",
                    "total": 30,
                    "reportable": 10,
                    "nonReportable": 20
                },
                {
                    "name": "HHP",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                },
                {
                    "name": "Genset",
                    "total": 30,
                    "reportable": 20,
                    "nonReportable": 10
                }
            ]
        }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qlkq8x._.js.map