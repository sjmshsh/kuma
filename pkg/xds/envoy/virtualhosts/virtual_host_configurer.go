package virtualhosts

import (
	envoy_config_core_v3 "github.com/envoyproxy/go-control-plane/envoy/config/core/v3"
	envoy_route "github.com/envoyproxy/go-control-plane/envoy/config/route/v3"

	core_mesh "github.com/kumahq/kuma/pkg/core/resources/apis/mesh"
	util_proto "github.com/kumahq/kuma/pkg/util/proto"
	envoy_common "github.com/kumahq/kuma/pkg/xds/envoy"
	v3 "github.com/kumahq/kuma/pkg/xds/envoy/routes/v3"
)

func CommonVirtualHost(name string) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		VirtualHostMustConfigureFunc(func(vh *envoy_route.VirtualHost) {
			vh.Name = name
			vh.Domains = []string{"*"}
		}),
	)
}

func DomainNames(domainNames ...string) VirtualHostBuilderOpt {
	if len(domainNames) == 0 {
		return VirtualHostBuilderOptFunc(nil)
	}

	return AddVirtualHostConfigurer(
		VirtualHostMustConfigureFunc(func(vh *envoy_route.VirtualHost) {
			vh.Domains = domainNames
		}),
	)
}

func Routes(routes envoy_common.Routes) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		&v3.RoutesConfigurer{
			Routes: routes,
		})
}

// Redirect for paths that match to matchPath returns 301 status code with new port and path
func Redirect(matchPath, newPath string, allowGetOnly bool, port uint32) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(&v3.RedirectConfigurer{
		MatchPath:    matchPath,
		NewPath:      newPath,
		Port:         port,
		AllowGetOnly: allowGetOnly,
	})
}

// RequireTLS specifies that this virtual host must only accept TLS connections.
func RequireTLS() VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		VirtualHostMustConfigureFunc(func(vh *envoy_route.VirtualHost) {
			vh.RequireTls = envoy_route.VirtualHost_ALL
		}),
	)
}

// SetResponseHeader unconditionally sets the named response header to the given value.
func SetResponseHeader(name string, value string) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		VirtualHostMustConfigureFunc(func(vh *envoy_route.VirtualHost) {
			hsts := &envoy_config_core_v3.HeaderValueOption{
				Append: util_proto.Bool(false),
				Header: &envoy_config_core_v3.HeaderValue{
					Key:   name,
					Value: value,
				},
			}

			vh.ResponseHeadersToAdd = append(vh.ResponseHeadersToAdd, hsts)
		}),
	)
}

func Retry(retry *core_mesh.RetryResource, protocol core_mesh.Protocol) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		VirtualHostMustConfigureFunc(func(vh *envoy_route.VirtualHost) {
			vh.RetryPolicy = v3.RetryConfig(retry, protocol)
		}),
	)
}

func Route(matchPath, newPath, cluster string, allowGetOnly bool) VirtualHostBuilderOpt {
	return AddVirtualHostConfigurer(
		&v3.RouteConfigurer{
			MatchPath:    matchPath,
			NewPath:      newPath,
			Cluster:      cluster,
			AllowGetOnly: allowGetOnly,
		})
}